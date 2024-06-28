// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

//============================================================================================================================================================================================================================================
if (document.querySelector('.video-module')) {
    document.addEventListener("watcherCallback", function (e) {
        const entry = e.detail.entry;
        const targetElement = entry.target;
        if (targetElement.dataset.watch === 'video') {
            if (entry.isIntersecting) {
                // Видим объект
                targetElement.querySelector('video').play();
                targetElement.classList.add('_active'); // Отображаем кнопку паузы
            } else {
                // Не видим объект
                targetElement.querySelector('video').pause();
                // Убираем класс '_active' только если это нужно для визуального эффекта
                targetElement.classList.remove('_active');
            }
        }
    });

    const videoModule = document.querySelector('.video-module');
    const video = videoModule.querySelector('video');

    videoModule.addEventListener("click", function (e) {
        if (!videoModule.classList.contains('_init')) {
            videoModule.classList.add('_init');
            video.play();
            video.muted = false;
            videoModule.classList.add('_active'); // Отображаем кнопку паузы
        } else {
            if (video.paused) {
                video.play();
                videoModule.classList.add('_active'); // Отображаем кнопку паузы
            } else {
                video.pause();
                videoModule.classList.remove('_active'); // Отображаем кнопку воспроизведения
            }
        }
    });

    // Автоматически инициализировать видео при загрузке страницы
    window.addEventListener("load", function () {
        if (video) {
            video.play();
            videoModule.classList.add('_init');
            videoModule.classList.add('_active'); // Отображаем кнопку паузы
        }
    });

    // Убедитесь, что видео повторяется автоматически
    video.loop = true;
}

//============================================================================================================================================================================================================================================
