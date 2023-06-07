import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>Deepo</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>Hakkımızda</h2>
            <ul>
              <li>Kariyer</li>
              <li>Mağazalarımız</li>
              <li>Odak Noktamız</li>
              <li>Şartlar ve Koşullar</li>
              <li>Gizlilik Politikası</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Müşteri Hizmetleri</h2>
            <ul>
              <li>Yardım Merkezi</li>
              <li>Nasıl Satın Alınır</li>
              <li>Siparişim Nerede?</li>
              <li>Kurumsal ve Toplu Alışveriş</li>
              <li>İadeler ve Geri Ödemeler</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Bize Ulaşın</h2>
            <ul>
              <li>	Ataşehir Mah. Çayırlı Sok. No:148 Merkez/ELAZIĞ</li>
              <li>Gmail: deepo_yardim@gmail.com</li>
              <li>Tel NO: 0424 248 28 94</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer