export const Header = () => (
    <header className="header">
        {/*<div className="header__container">*/}
        {/*    <div className="header__logo">*/}
        {/*        QUANTUM*/}
        {/*    </div>*/}
        {/*    <form className="header__search" type="GET">*/}
        {/*        <div className="header__search-input-wrapper">*/}
        {/*            <input*/}
        {/*                className="header__search-input"*/}
        {/*                type="text"*/}
        {/*                placeholder="Search goods"*/}
        {/*            />*/}
        {/*        </div>*/}
        {/*        <div className="header__search-dropdown">*/}
        {/*            <div data-select className="header-select">*/}
        {/*                <div data-select-title className="header-select__title">*/}
        {/*                    CATEGORY*/}
        {/*                </div>*/}
        {/*                <div className="header-select__dropdown hidden">*/}
        {/*                    <div*/}
        {/*                        data-select-item="mobile"*/}
        {/*                        className="header-select__dropdown-item"*/}
        {/*                    >*/}
        {/*                        Mobile*/}
        {/*                    </div>*/}
        {/*                    <div*/}
        {/*                        data-select-item="tablet"*/}
        {/*                        className="header-select__dropdown-item"*/}
        {/*                    >*/}
        {/*                        Tablet*/}
        {/*                    </div>*/}
        {/*                    <div*/}
        {/*                        data-select-item="laptop"*/}
        {/*                        className="header-select__dropdown-item"*/}
        {/*                    >*/}
        {/*                        Laptop*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}

        {/*            <select*/}
        {/*                className="hidden"*/}
        {/*                name="select"*/}
        {/*                id="selectReal"*/}
        {/*                value="none"*/}
        {/*            >*/}
        {/*                <option value="none">CATEGORY</option>*/}
        {/*                <option value="mobile">Mobile</option>*/}
        {/*                <option value="tablet">Tablet</option>*/}
        {/*                <option value="laptop">Laptop</option>*/}
        {/*            </select>*/}
        {/*        </div>*/}
        {/*        <div className="header__search-button-wrapper">*/}
        {/*            <button className="header__search-button" type="submit">*/}
        {/*                <img src="./img/icons/search-icon.svg" alt=""/>*/}
        {/*            </button>*/}
        {/*        </div>*/}
        {/*    </form>*/}
        {/*    <div className="header__links">*/}
        {/*        <a href="#" className="header-link header-link--notify">*/}
        {/*                <span className="header-link__icon">*/}
        {/*                    <svg*/}
        {/*                        xmlns="http://www.w3.org/2000/svg"*/}
        {/*                        width="21"*/}
        {/*                        height="20"*/}
        {/*                        viewBox="0 0 21 20"*/}
        {/*                    >*/}
        {/*                        <g>*/}
        {/*                            <path*/}
        {/*                                d="M16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2c1.099 0 2-.9 2-2s-.901-2-2-2zM4.008 18c0 1.1.89 2 1.99 2 1.102 0 2-.9 2-2s-.898-2-2-2c-1.1 0-1.99.9-1.99 2zM14.55 9H7.53l-.13-.27L5.16 4h12.15zM3.27 0H0v2H2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96C4 14.1 4.9 15 6 15h12v-2H6.42a.256.256 0 0 1-.25-.25l.03-.12L7.1 11h7.45c.75 0 1.409-.41 1.75-1.03l3.861-7.01-.16-.96H4.21z"*/}
        {/*                            />*/}
        {/*                        </g>*/}
        {/*                    </svg>*/}
        {/*                </span>*/}
        {/*            <span className="header-link__text">2 Items</span>*/}
        {/*        </a>*/}
        {/*        <a href="#" className="header-link">*/}
        {/*                <span className="header-link__icon">*/}
        {/*                    <svg*/}
        {/*                        xmlns="http://www.w3.org/2000/svg"*/}
        {/*                        width="20"*/}
        {/*                        height="19"*/}
        {/*                        viewBox="0 0 20 19"*/}
        {/*                    >*/}
        {/*                        <path*/}
        {/*                            d="M10.1 15.55l-.1.1-.1-.1C5.14 11.24 2 8.39 2 5.5 2 3.5 3.5 2 5.5 2c1.54 0 3.038.99 3.569 2.36h1.871C11.46 2.99 12.96 2 14.5 2c2.002 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.898 10.05zM14.5 0c-1.74 0-3.41.81-4.5 2.09C8.912.81 7.24 0 5.5 0 2.42 0 0 2.42 0 5.5c0 3.78 3.4 6.86 8.55 11.54L10 18.35l1.451-1.32C16.6 12.36 20 9.28 20 5.5 20 2.42 17.58 0 14.5 0z"*/}
        {/*                        />*/}
        {/*                    </svg>*/}
        {/*                </span>*/}
        {/*            <span className="header-link__text">Wish List</span>*/}
        {/*        </a>*/}
        {/*        <a href="#" className="header-link d-flex align-items-center">*/}
        {/*                <span className="header-link__icon">*/}
        {/*                    <svg*/}
        {/*                        xmlns="http://www.w3.org/2000/svg"*/}
        {/*                        width="16"*/}
        {/*                        height="16"*/}
        {/*                        viewBox="0 0 16 16"*/}
        {/*                    >*/}
        {/*                        <path*/}
        {/*                            d="M16 13v3H0v-3c0-2.66 5.33-4 8-4s8 1.34 8 4zm-4.002-9c0 2.21-1.789 4-3.998 4a3.997 3.997 0 0 1-4-4c0-2.21 1.788-4 4-4 2.21 0 3.998 1.79 3.998 4zm-10.1 9v1.1H14.1V13c0-.64-3.13-2.1-6.1-2.1-2.968 0-6.1 1.46-6.1 2.1zM5.9 4a2.101 2.101 0 0 0 4.202 0A2.101 2.101 0 0 0 5.9 4z"*/}
        {/*                        />*/}
        {/*                    </svg>*/}
        {/*                </span>*/}
        {/*            <span className="header-link__text">Sing in</span>*/}
        {/*        </a>*/}
        {/*    </div>*/}
        {/*</div>*/}
        {/*<div className="header__nav">*/}
        {/*    <nav className="header-nav">*/}
        {/*        <div className="header-nav__categories">*/}
        {/*            <a href="#" className="header-mega-menu-link">*/}
        {/*                    <span className="header-mega-menu-link__icon">*/}
        {/*                        <svg*/}
        {/*                            xmlns="http://www.w3.org/2000/svg"*/}
        {/*                            width="18"*/}
        {/*                            height="12"*/}
        {/*                            viewBox="0 0 18 12"*/}
        {/*                        >*/}
        {/*                            <path*/}
        {/*                                d="M18 0v2H0V0zM0 5h18v2H0zm0 5h18v2H0z"*/}
        {/*                            />*/}
        {/*                        </svg>*/}
        {/*                    </span>*/}
        {/*                <span className="header-mega-menu-link__text"*/}
        {/*                >All Categories</span*/}
        {/*                >*/}
        {/*            </a>*/}
        {/*        </div>*/}
        {/*        <div className="header-nav__deals">*/}
        {/*            <a href="#" className="header-nav__link">Super Deals</a>*/}
        {/*            <a href="#" className="header-nav__link">Featured Brands</a>*/}
        {/*            <a href="#" className="header-nav__link">Collections</a>*/}
        {/*            <a href="#" className="header-nav__link">Bestselling</a>*/}
        {/*        </div>*/}

        {/*        <div className="header-nav__select">*/}
        {/*            <div className="header-nav__select-item">*/}
        {/*                <div className="nav-dropdown">*/}
        {/*                    <a href="#" className="nav-dropdown__title">*/}
        {/*                        Help*/}

        {/*                        <div className="nav-dropdown__title-icon">*/}
        {/*                            <svg*/}
        {/*                                xmlns="http://www.w3.org/2000/svg"*/}
        {/*                                width="8"*/}
        {/*                                height="5"*/}
        {/*                                viewBox="0 0 8 5"*/}
        {/*                            >*/}
        {/*                                <path*/}
        {/*                                    d="M3.998 5L8 2.5V.104L3.998 2.62 0 0v2.5z"*/}
        {/*                                />*/}
        {/*                            </svg>*/}
        {/*                        </div>*/}
        {/*                    </a>*/}
        {/*                    <div className="nav-dropdown__dropdown">*/}
        {/*                        <a*/}
        {/*                            href="#"*/}
        {/*                            className="nav-dropdown__dropdown-item"*/}
        {/*                        >*/}
        {/*                            F.A.Q.*/}
        {/*                        </a>*/}
        {/*                        <a*/}
        {/*                            href="#"*/}
        {/*                            className="nav-dropdown__dropdown-item"*/}
        {/*                        >*/}
        {/*                            Payment*/}
        {/*                        </a>*/}
        {/*                        <a*/}
        {/*                            href="#"*/}
        {/*                            className="nav-dropdown__dropdown-item"*/}
        {/*                        >*/}
        {/*                            Delivery*/}
        {/*                        </a>*/}
        {/*                    </div>*/}
        {/*                </div>*/}

        {/*            </div>*/}
        {/*            <div className="header-nav__select-item">*/}
        {/*                <div className="nav-dropdown">*/}
        {/*                    <a href="#" className="nav-dropdown__title">*/}
        {/*                        USD*/}

        {/*                        <div className="nav-dropdown__title-icon">*/}
        {/*                            <svg*/}
        {/*                                xmlns="http://www.w3.org/2000/svg"*/}
        {/*                                width="8"*/}
        {/*                                height="5"*/}
        {/*                                viewBox="0 0 8 5"*/}
        {/*                            >*/}
        {/*                                <path*/}
        {/*                                    d="M3.998 5L8 2.5V.104L3.998 2.62 0 0v2.5z"*/}
        {/*                                />*/}
        {/*                            </svg>*/}
        {/*                        </div>*/}
        {/*                    </a>*/}
        {/*                    <div className="nav-dropdown__dropdown">*/}
        {/*                        <a*/}
        {/*                            href="#"*/}
        {/*                            className="nav-dropdown__dropdown-item"*/}
        {/*                        >*/}
        {/*                            USD*/}
        {/*                        </a>*/}
        {/*                        <a*/}
        {/*                            href="#"*/}
        {/*                            className="nav-dropdown__dropdown-item"*/}
        {/*                        >*/}
        {/*                            RUR*/}
        {/*                        </a>*/}
        {/*                        <a*/}
        {/*                            href="#"*/}
        {/*                            className="nav-dropdown__dropdown-item"*/}
        {/*                        >*/}
        {/*                            UAH*/}
        {/*                        </a>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*            <div className="header-nav__select-item">*/}
        {/*                <div className="nav-dropdown">*/}
        {/*                    <a href="#" className="nav-dropdown__title">*/}
        {/*                        Language*/}

        {/*                        <div className="nav-dropdown__title-icon">*/}
        {/*                            <svg*/}
        {/*                                xmlns="http://www.w3.org/2000/svg"*/}
        {/*                                width="8"*/}
        {/*                                height="5"*/}
        {/*                                viewBox="0 0 8 5"*/}
        {/*                            >*/}
        {/*                                <path*/}
        {/*                                    d="M3.998 5L8 2.5V.104L3.998 2.62 0 0v2.5z"*/}
        {/*                                />*/}
        {/*                            </svg>*/}
        {/*                        </div>*/}
        {/*                    </a>*/}
        {/*                    <div className="nav-dropdown__dropdown">*/}
        {/*                        <a*/}
        {/*                            href="#"*/}
        {/*                            className="nav-dropdown__dropdown-item"*/}
        {/*                        >*/}
        {/*                            English*/}
        {/*                        </a>*/}
        {/*                        <a*/}
        {/*                            href="#"*/}
        {/*                            className="nav-dropdown__dropdown-item"*/}
        {/*                        >*/}
        {/*                            Russian*/}
        {/*                        </a>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </nav>*/}
        {/*</div>*/}
    </header>
)
