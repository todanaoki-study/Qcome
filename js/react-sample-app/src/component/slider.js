import React from "react";

function Slider({ isOpen, onClose }) {

    const sliderClass = isOpen ? "slider open" : "slider closed";

    return (
        <div className={sliderClass} id="slider">

            <div className="slider__inner">
                <label className="slider__label">
                    <input className="slider__input" type="text" id="search" placeholder="キーワードで検索"></input>
                    <img className="slider__img" src="https://placehold.jp/30x30.png" alt=""></img>
                </label>

                <p className="slider__title">タグで絞り込み</p>
                <ul className="slider__list">
                    <li className="slider__item">あいうえお</li>
                    <li className="slider__item">あいうえお</li>
                    <li className="slider__item">あいうえお</li>
                    <li className="slider__item">あいうえお</li>
                    <li className="slider__item">あいうえお</li>
                </ul>

                <p className="slider__title">価格帯</p>
                <ul className="slider__list">
                    <li className="slider__item">~1000円</li>
                    <li className="slider__item">~1000円</li>
                    <li className="slider__item">~1000円</li>
                    <li className="slider__item">~1000円</li>
                    <li className="slider__item">~1000円</li>
                </ul>

                <p className="slider__title">現在地から絞り込む</p>
            </div>
        </div>
    );
}

export default Slider;