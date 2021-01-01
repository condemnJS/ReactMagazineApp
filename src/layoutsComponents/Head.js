export const Head = () => {
    return (
        <div className={'head-wrapper d-f al-c'}>
            <div className="container d-f w-100">
                <div className="head__logo">
                    <span><b>Татар</b> Маркет</span>
                </div>
                <div className="head__burger d-f al-c">
                    <div className="burger__item catalog-menu d-f ju-c al-c">
                        <div>
                            <div className="elementBurger"></div>
                            <div className="elementBurger"></div>
                            <div className="elementBurger"></div>
                        </div>
                    </div>
                    <div className="burger__item catalog-title d-f al-c">
                        <strong>Каталог</strong>
                    </div>
                </div>
                <div className="head__search d-f al-c">
                    <form action="" method={'POST'} className={'d-f'}>
                        <div className="form-group">
                            <input type="search" placeholder={'Искать товар'}/>
                        </div>
                        <input type="submit" value={'Найти'}/>
                    </form>
                </div>
                <div className="head__nav d-f al-c">
                    <div className={'nav__item d-f fl-c al-c'}>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas"
                             data-icon="gift" className="svg-inline--fa fa-gift fa-w-16" role="img"
                             viewBox="0 0 512 512">
                            <path fill="currentColor"
                                  d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"/>
                        </svg>
                        <small>Бонусы</small>
                    </div>
                    <div className={'nav__item d-f fl-c al-c'} style={{'marginTop': '1px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas"
                             data-icon="cube" className="svg-inline--fa fa-cube fa-w-16" role="img"
                             viewBox="0 0 512 512">
                            <path fill="currentColor"
                                  d="M239.1 6.3l-208 78c-18.7 7-31.1 25-31.1 45v225.1c0 18.2 10.3 34.8 26.5 42.9l208 104c13.5 6.8 29.4 6.8 42.9 0l208-104c16.3-8.1 26.5-24.8 26.5-42.9V129.3c0-20-12.4-37.9-31.1-44.9l-208-78C262 2.2 250 2.2 239.1 6.3zM256 68.4l192 72v1.1l-192 78-192-78v-1.1l192-72zm32 356V275.5l160-65v133.9l-160 80z"/>
                        </svg>
                        <small>Заказы</small>
                    </div>
                    <div className={'nav__item d-f fl-c al-c'}>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="far"
                             data-icon="heart" className="svg-inline--fa fa-heart fa-w-16" role="img"
                             viewBox="0 0 512 512">
                            <path fill="currentColor"
                                  d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"/>
                        </svg>
                        <small>Избранное</small>
                    </div>
                    <div className={'nav__item d-f fl-c al-c'} style={{'marginTop': '1px'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas"
                             data-icon="shopping-cart" className="svg-inline--fa fa-shopping-cart fa-w-18" role="img"
                             viewBox="0 0 576 512">
                            <path fill="currentColor"
                                  d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"/>
                        </svg>
                        <small>Корзина</small>
                    </div>
                </div>
                <div className="head__button d-f al-c">
                    <a href="#">Войти</a>
                </div>
            </div>
        </div>
    );
}
