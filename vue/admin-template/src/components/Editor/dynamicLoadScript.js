let callbacks = []

function loadedTinymce () {
  // 检查已成功下载的脚本
  return window.tinymce
}

const dynamicLoadScript = (src, callback) => {
  const existingScript = document.getElementById(src)

  const cb = callback || function () {}

  if (!existingScript) {
    const script = document.createElement('script')
    script.src = src // 正在加载的第三方库的src url
    script.id = src
    document.body.appendChild(script)
    callbacks.push(cb)
    const onEnd = 'onload' in script ? stdOnEnd : ieOnEnd
    onEnd(script)
  }

  if (existingScript && cb) {
    if (loadedTinymce()) {
      cb(null, existingScript)
    } else {
      callbacks.push(cb)
    }
  }

  function stdOnEnd (script) {
    script.onload = function () {
      // 这一点，这里有必要使用 onload = null
      // 因为即使是IE9也和其他浏览器不一样
      this.onerror = this.onload = null
      for (const cb of callbacks) {
        cb(null, script)
      }
      callbacks = null
    }
    script.onerror = function () {
      this.onerror = this.onload = null
      cb(new Error('Failed to load ' + src), script)
    }
  }

  function ieOnEnd (script) {
    script.onreadystatechange = function () {
      if (this.readyState !== 'complete' && this.readyState !== 'loaded') return
      this.onreadystatechange = null
      for (const cb of callbacks) {
        cb(null, script) // 在IE8中没有办法捕获加载错误
      }
      callbacks = null
    }
  }
}

export default dynamicLoadScript
