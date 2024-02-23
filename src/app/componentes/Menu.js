import Link from "next/link";

export default function Menu(){
    return(
        <header>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link href="/" className="nav-link active">Home</Link>
                        <Link href="/registro" className="nav-link">Registrar</Link>
                    </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}