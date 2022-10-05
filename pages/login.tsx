import Topbar from "../components/topbar";
import Topnav from "../components/topnav";
import Footer from "../components/footer";
import styles from "../styles/login.module.css";

export default function Login() {
    return (
        <div className={styles.container}>
            <header>
                <Topbar />
                <Topnav />
            </header>
            <main className={styles['main-container']}>
                <div className={styles['form-container']}>
                    <section>
                        <h2>Sign In</h2>
                        <p>Please enter your email address and your password to sign in. Passwords are case sensitive.</p>
                        <form action="#" className={styles.form}>
                            <label htmlFor="email">Email address</label>
                            <input className={styles.email} data-validate="isEmail" type="email" id="email" name="email" placeholder="Enter email here" />
                            <label htmlFor="password">Password</label>
                            <input className={styles.password} type="password" id="password" name="password" placeholder="Enter password here" />
                            <button type="submit">
                                Sign in
                            </button>
                        </form>
                    </section>
                    <section>
                        <h3 className="page-subheading">Create an account</h3>
                        <p>Please enter your email address to create an account.</p>
                        <div className={styles.newline}></div>
                        <form action="#" className={styles.form}>
                            <label htmlFor="email_create">Email address</label>
                            <input type="email" id="email_create" name="email_create" placeholder="Enter email here" />
                            <input type="hidden" className="hidden" name="back" value="my-account" />
                            <button type="submit">
                                Create an account
                            </button>
                        </form>
                    </section>

                </div>
            </main>
            <Footer/>
        </div>

    )
}