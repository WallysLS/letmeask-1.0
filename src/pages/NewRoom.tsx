import Illustration from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";

import {Button} from "../components/Button";

import "../styles/auth.scss";

export function NewRoom() {
    return (
        <div id="page-auth">
            <aside>
                <img src={Illustration} alt="Questions and Answers illustration" />
                <strong>É hora de construir algo novo</strong>
                <p>Tire dúvidas em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask logo" />
                    <h2>Crie uma nova nova sala</h2>
                    <form>
                        <input type="text" placeholder="Nome da sala" />
                        <Button type="submit">Criar sala</Button>
                    </form>
                    <p>Quer entrar em uma sala existente? <a href="#">Clique aqui</a></p>
                </div>
            </main>
        </div>
    );
}
