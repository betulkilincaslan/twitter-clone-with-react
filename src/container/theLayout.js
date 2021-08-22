import {
    Content,
    SideLeft,
    SideRight
} from './index';

const TheLayout = () => {
    return (
        <div className="loggedView">
            <div className="container">
                <div className="row">
                    <SideLeft />
                    <div className="col-6">
                        <div className="main">
                            <Content />
                        </div>
                    </div>
                    <SideRight />
                </div>
            </div>
        </div>
    );
}

export default TheLayout;
