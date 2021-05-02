import React from 'react';

const Navbar = () => {
    // const [isScrolled, setIsScrolled] = useState(false);

    // const handleScroll = () => {
    //     const offset = window.scrollY;
    //     if(offset > 200){
    //         setIsScrolled(true)
    //     }else{
    //         setIsScrolled(false);
    //       }
    // };
    // useEffect(() => {
    //     window.addEventListener('scroll',handleScroll)
    //   });

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" href="/">Home</a>
                        <a className="nav-link" href="/">Features</a>
                        <a className="nav-link" href="/">Pricing</a>
                        <a className="nav-link" href="/">Disabled</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;