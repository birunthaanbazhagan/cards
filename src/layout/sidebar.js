import icon from "../images/icon.png";
import "./css/style.css";

function Sidebar(){
    return (
        <div className="primary-nav-bar navbar-inverse">
            <div className="ft-logo">
                <img src={icon} className="ft-icon" />
            </div>
            <ul className="nav nav-pills nav-stacked">
                <li>
                    <a className="hint--right ember-view">
                        <i className="icon-dashboard"></i>
                    </a>
                </li>
                <li>
                    <a className="hint--right ember-view">
                        <div class="r">
                        <i className="icon-inbox"></i>
                        <span class="inbox-unseen-count"></span>
                        </div>
                    </a>
                </li>
                <li>
                    <a className="active ember-view">
                        <div class="r">
                            <i className="icon-my-job"></i>
                            <span class="icon-ellipsis-v"></span>
                        </div>
                    </a>
                </li>
                <li>
                    <a className="hint--right ember-view">
                        <div class="r">
                            <i className="icon-directory"></i>
                            <span class="icon-ellipsis-v"></span>
                        </div>
                    </a>
                </li>
                <li>
                    <a class="hint--right ember-view">
                        <i class="icon-reports-nav"></i>
                    </a>
                </li>

                <li>
                    <a class="hint--right nav-settings ember-view">
                        <i class="icon-settings"></i>
                    </a>
                </li>
                <div class="stack-bottom">
                    <li class="page-help ember-view">
                        <a class="hint--right">
                            <i class="icon-help-circled"></i>
                        </a>
                    </li>
                    <li>
                        <a id="custom-fchat" class="hint--right">
                            <i class="icon-comment"></i>
                        </a>
                    </li>
                    <li class="text-center">
                        <img src="https://accounts.freshworks.com/omnibar/assets/stable/switcher.svg?v=v1.0.1-1651650232" alt="" role="presentation"/>
                    </li>
                </div>
            </ul>
        </div>
    );
}

export default Sidebar;