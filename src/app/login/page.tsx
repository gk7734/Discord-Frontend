'use client'

import './login.scss'
import TextInput from "@/app/components/TextInput";
import FormBtn from "@/app/components/FormBtn";
import {useState} from "react";
import QRCode from "qrcode.react";
import Link from "next/link";
import { gsap } from "gsap";
import {useGSAP} from "@gsap/react";

const login = () => {
    const [email, setEmail] = useState<null | string>(null);
    const [password, setPassword] = useState<null | string>(null);

    useGSAP(() => {
        gsap.fromTo('.login-container', {
            opacity: 0,
            y: -100,
        }, {
            y: 0,
            opacity: 1,
            duration: 0.3,
            ease: 'power3.inOut'
        })
    })

    return (
        <div className={`login`}>
            <div className={`logo`}>
                <img src="/Images/Logo.png" alt="Logo" width={124} height={24}/>
            </div>
            <div className={`login-container`}>
                <div className={`login-form`}>
                    <div className={`mainTextBox`}>
                        <h1>돌아오신 것을 환영해요!</h1>
                        <h2>다시 만나다니 너무 반가워요!</h2>
                    </div>
                    <form>
                        <div className={`lg-inputBox`}>
                            <TextInput title={`이메일 또는 전화번호`} state={email} setState={setEmail} />
                            <br />
                            <TextInput title={`비밀번호`} state={password} setState={setPassword} />
                            <p className={`forgot`}>비밀번호를 잊으셨나요?</p>
                        </div>
                        <div className={'login-bottom'}>
                            <FormBtn title={'로그인'} />
                            <p>계정이 필요하신가요? <Link href={`/register`} style={{ textDecoration: "none"}}><span>가입하기</span></Link></p>
                        </div>
                    </form>
                </div>
                <div className={`qr-box`}>
                    <div className={`QR`}>
                        <QRCode value={'1234'} size={160} />
                    </div>
                    <h1>QR 코드로 로그인</h1>
                    <h2><span>Discord 모바일 앱</span>으로 스캔해 바로 <br />
                        로그인 하세요.
                    </h2>
                    <p>또는, 패스키로 로그인하세요</p>
                </div>
            </div>
        </div>
    )
}

export default login;
