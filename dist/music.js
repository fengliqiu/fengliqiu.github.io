const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "Last Christmas",
        artist: 'Taylor Swift',
        url: 'http://www.ytmp3.cn/down/58440.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/84.jpg',
      }
    ]
});