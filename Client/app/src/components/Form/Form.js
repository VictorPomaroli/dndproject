import "./Form.css"

export default function Form() {
    return (
    <div className="box">
        <h1>Form Test</h1>
        <div className="campo">
            <p>Usuário</p>
            <input type="name"/>
        </div>
        <div className="campo">
            <p>Senha</p>
            <input type="password"/>
        </div>
        <button>Login</button>
    </div>
    )
}