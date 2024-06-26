function getRandomBackground() {
    // 获取当前视口的宽度和高度
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // 构建URL请求背景图片
    const url = `https://picsum.photos/${viewportWidth}/${viewportHeight}`;

    // 设置body的背景图片，并确保背景图覆盖整个视口且居中
    document.body.style.backgroundImage = `url('${url}')`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundAttachment = 'fixed'; // 背景图固定，不随滚动条滚动
}

// 页面加载完成后获取背景图片
window.onload = getRandomBackground;

// 监听窗口大小变化事件，以适应不同屏幕尺寸
window.addEventListener('resize', getRandomBackground);