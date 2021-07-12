import Illustration from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";

import {Button} from "../components/Button";

import "../styles/auth.scss";

export function Home() {
    return (
        <div id="page-auth">
            <aside>
                <img src={Illustration} alt="Questions and Answers illustration" />
                <strong>Crie salas de perguntas com seus amigos</strong>
                <p>Tire dúvidas em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask logo" />
                    <button className="create-room">
                        <img src={googleIconImg} alt="Google logo" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">Ou entre em uma sala</div>
                    <form>
                        <input type="text" placeholder="Digite o código da sala" />
                        <Button type="submit">Entre na sala</Button>
                    </form>
                </div>
            </main>
        </div>
    );
}
