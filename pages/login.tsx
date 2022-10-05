import Topbar from "../components/topbar";
import Topnav from "../components/topnav";

export default function Login() {
    return (
        <div>
            <header>
                <Topbar />
                <Topnav />
            </header>
            <main className="container">
                <h1 className="page-heading">Authentication</h1>
                <form action="https://theoilpaintstore.com/login" method="post" id="create-account_form" className="box">
                    <h3 className="page-subheading">Create an account</h3>
                    <p>Please enter your email address to create an account.</p>
                    <div className="alert alert-danger" id="create_account_error" style={{ display: 'none' }}></div>
                    <div className="form-group">
                        <label htmlFor="email_create">Email address</label>
                        <input type="email" className="is_required validate account_input form-control" data-validate="isEmail" id="email_create" name="email_create" value="" />
                        <div className="submit">
                            <input type="hidden" className="hidden" name="back" value="my-account" />						<button className="btn btn-outline button button-medium exclusive" type="submit" id="SubmitCreate" name="SubmitCreate">
                                <span>
                                    <i className="fa fa-user left"></i>
                                    Create an account
                                </span>
                            </button>
                            <input type="hidden" className="hidden" name="SubmitCreate" value="Create an account" />
                        </div>
                    </div>
                </form>
                <form action="https://theoilpaintstore.com/login" method="post" id="login_form" className="box">
                    <h3 className="page-subheading">Already registered?</h3>
                    <label htmlFor="email">Email address</label>
                    <input className="is_required validate account_input form-control" data-validate="isEmail" type="email" id="email" name="email" value="" />
                    <label htmlFor="passwd">Password</label>
                    <input className="is_required validate account_input form-control" type="password" data-validate="isPasswd" id="passwd" name="passwd" value="" />
                    <p className="lost_password form-group"><a href="https://theoilpaintstore.com/password-recovery" title="Recover your forgotten password" rel="nofollow">Forgot your password?</a></p>
                    <p className="submit">
                        <input type="hidden" className="hidden" name="back" value="my-account" />						<button type="submit" id="SubmitLogin" name="SubmitLogin" className="button btn btn-outline button-medium">
                            <span>
                                <i className="fa fa-lock left"></i>
                                Sign in
                            </span>
                        </button>
                    </p>
                </form>

            </main>
        </div>

    )
}