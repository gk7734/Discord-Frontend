'use client'
import './login.scss'
import TextInput from "@/app/components/TextInput";
import FormBtn from "@/app/components/FormBtn";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import { gsap } from "gsap";
import {useGSAP} from "@gsap/react";
import {QRCode} from "react-qrcode-logo";
import {useCaptchaStore, useModalStore} from "@/app/store/useStore";
import CaptchaModal from "@/app/components/CaptchaModal";
import BackDrop from "@/app/components/BackDrop";

const login = () => {
    const [email, setEmail] = useState<null | string>(null);
    const [password, setPassword] = useState<null | string>(null);
    const { isOpen, setOpen } = useModalStore();
    const verify = useCaptchaStore(state => state.verify);

    const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

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

    useEffect(() => {

    }, [verify]);


    const submitHandler = (e: any) => {
        e.preventDefault();
        if (!passwordRegExp.test(password as string)) {
            alert('비밀번호는 최소 8자 이상, 대문자, 소문자, 숫자, 특수문자를 포함해야 합니다.');
        } else {
            setOpen(true);
        }
    }

    return (
        <div className={`login`} onContextMenu={(e) => {e.preventDefault()}}>
            <div className={`logo`}>
                <img src="/Images/Logo.png" alt="Logo" width={124} height={24}/>
            </div>
            <div className={`login-container`}>
                <div className={`login-form`}>
                    <div className={`mainTextBox`}>
                        <h1>돌아오신 것을 환영해요!</h1>
                        <h2>다시 만나다니 너무 반가워요!</h2>
                    </div>
                    <form onSubmit={submitHandler}>
                        <div className={`lg-inputBox`}>
                            <TextInput title={`이메일 또는 전화번호`} state={email} setState={setEmail} required={true} />
                            <br />
                            <TextInput title={`비밀번호`} type={'password'} state={password} setState={setPassword} required={true} />
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
                        <QRCode value={'https://youtu.be/dQw4w9WgXcQ?si=IyMeA0SHlQuklWov'} quietZone={0} logoImage={'/Images/DiscordBlackIcon.png'} qrStyle={'squares'} logoPadding={2} logoPaddingStyle={'circle'} size={160} />
                    </div>
                    <h1>QR 코드로 로그인</h1>
                    <h2><span>Discord 모바일 앱</span>으로 스캔해 바로 로그인 하세요.</h2>
                    <p>또는, 패스키로 로그인하세요</p>
                </div>
            </div>
            {isOpen && <BackDrop><CaptchaModal/></BackDrop>}
        </div>
    )
}

export default login;
