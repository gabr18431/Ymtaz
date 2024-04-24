import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <div className="header">
        <div className="icon">
            <MenuIcon />
        </div>
        <nav>
            <span>سياسة الخصوصية</span>
            <span>أرقام التشغيل</span>
            <span>الدعم الفني </span>
            <span>اتصل بنا</span>
            <span>من نحن</span>
            <span>الرئيسية</span>
        </nav>
        <div className="logo">
          <img src="https://s3-alpha-sig.figma.com/img/3f11/b1af/f6f48c4955e438c2e61462c5482a1b05?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pa10aiwcd3gKCzNspfKiu3kOKJOGMsEuFP05aIgEj~6f3S18m6lVOByDCvjSQ0jF3H1y-a6~ZU5uRTJ4lzsjMRG-s7kRAACVa3pDi3TlKPhIB7k84jPbwdm3oe70Ih1gtvvRAWcZA2iO7F97os2QjVCyswz3xogXvwIzYH7Odl6gZ7KWazkVzfi2FU0r5kfLpT63z0cEpxHMMI0mzf9w~rdm9EJWNscBTWV4qSGDNPDUg0lLeakPPuQE4sG3AD86Extu7J50v-V3sDHHS0TG7S27z8pXrvPXi0f8rssvUa~Dvfhs5WNgGnzVcv-djpAhFqkf3Hg~a1KqAQtn6J6fsw__" alt="" />
        </div>
    </div>
  )
}

export default Header