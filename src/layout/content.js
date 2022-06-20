import headerlogo from "../images/header-logo.png";
import React, { useState, useEffect } from 'react';
import Search from '../layout/search';



function Content(){
    const [searchInput, setSearchInput] = useState('');
    const searchItems = () => {
    setSearchInput(searchValue)
}
    return (
    <div className="sub-header-trail sub-header ember-view">
        <nav className="navbar top-nav-bar">
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <div className="navbar-header">
                        <a className="navbar-brand ember-view" href="#">
                            <div className="logo-wrapper">
                                <img src={ headerlogo } className="brand-header-logo" />
                            </div>
                        </a>
                        <a className="ember-view">
                            <h2 className="brand-name">
                            iamneo.io Talent Center
                            </h2>
                        </a>
                </div>
                <ul class="nav navbar-nav navbar-right">
                    <li class="common-search-input">
                        <i class="icon-search-big placeholder-search-icon"></i>
                        <div id="ember286" class="form-group ember-view">
                            <div class="relative base-input-wrapper">
                                <input placeholder="Search" id="ember288" onChange={(e) => searchItems(e.target.value)} class="form-control ember-text-field ember-view" type="text" />  
                                <search />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="page-common-add">
                            <div tabindex="0" role="button" class="dropdown-toggle btn add-new-button ember-basic-dropdown-trigger ember-basic-dropdown-trigger--in-place ember-view">
                                <i class="icon-add"></i>
                                Add New
                            </div>
                        </div>
                    </li>
                    <li class="top-nav-separator"></li>
                    <li>
                        <a class="beamer-trigger icon-gift beamer_beamerSelector">
                            <div class="beamer_icon"></div>
                        </a>
                    </li>
                    <li class="profile-avatar-click-dropdown dropdown ember-view">
                        <a href="#" class="header-profile-icon dropdown-toggle ember-view" role="button">
                            <div class="vertical-align image-only ember-view">
                                <div class="avatar-circle ">
                                    <div data-test-id="initials-avatar" class="initialsAvatar avatarColor-15 ember-view">I</div>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        <div className="subheader-content">
            <div className="subheader-left">
                <ol className="breadcrumb ember-view">
                    <li className="ember-view">
                        <div className="ember-view">
                            <a className="breadcrumb-link active ember-view"><i class="fa fa-briefcase" aria-hidden="true"></i> Jobs</a>
                        </div>
                    </li>
                </ol>
                <div className="vertical-align">
                    <h4 className="breadcrumb-title">
                        <a className="job-name ember-view">
                            Full-stack Engineer
                            <div class="job-sub-header-tab-btns-wrap btn btn-default">
                                View Job Details
                            </div>
                        </a>
                        
                    </h4>

                    
                </div>
            </div>

            <div class="subheader-right">
                <span></span>
                <span></span>
                <div class="sub-header-btns">
                    <div class="btn-group btn-group ember-view">
                        <button class="btn btn-default ember-view" type="button">Add Candidate</button>
                        <button class="btn dropdown-toggle btn-default ember-view" role="button" type="button">
                        <span class="caret" data-test-id="add_candidate_dropdown"></span>
                        </button>
                    </div>
                    <div class="vertical-align ml20 dropdown ember-view">
                        <a class="dropdown-toggle btn hint--bottom-left job-sub-header-status ember-view" role="button">
                            <i class="icon-job-published"></i>&nbsp; &nbsp;<span>Published</span>&nbsp; &nbsp;<span class="caret"></span>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </div>
    );
}

export default Content;