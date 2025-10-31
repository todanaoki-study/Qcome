import React from "react";

function Slider({ isOpen, onClose }) {

    const sliderClass = isOpen ? "slider open" : "slider closed";

    return (
        <div className={sliderClass} id="slider">

            <div className="slider__inner">
                <label className="slider__label">
                    <input className="slider__input" type="text" id="search" placeholder="キーワードで検索"></input>
                    <img className="slider__img icon sIcon" src="/img/icon/search.webp" alt=""></img>
                </label>

                <p className="slider__title">タグで絞り込み</p>
                <ul className="slider__list">
                    <li className="slider__item">和室</li>
                    <li className="slider__item">リビング</li>
                    <li className="slider__item">ベランダ</li>
                    <li className="slider__item">庭</li>
                    <li className="slider__item">裏庭</li>
                </ul>

                <p className="slider__title">価格帯</p>
                <ul className="slider__list">
                    <li className="slider__item">~1000円</li>
                    <li className="slider__item">~2000円</li>
                    <li className="slider__item">~3000円</li>
                    <li className="slider__item">~4000円</li>
                    <li className="slider__item">4000円~</li>
                </ul>

                <p className="slider__title">現在地から絞り込む</p>

                <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1630.6936495075106!2d136.88386488617294!3d35.17189831320146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600376dce668d7a9%3A0x880910c853815ea1!2z5rKz5ZCI5aG-5a2m5ZySIOODiOODqeOCpOODh-ODs-ODiOOCs-ODs-ODlOODpeODvOOCv-WwgumWgOWtpuagoQ!5e0!3m2!1sja!2sjp!4v1761878724373!5m2!1sja!2sjp" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
}

export default Slider;