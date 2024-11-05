
const footer = () => {
  return (
    <footer className="pt-20 pb-4">
        <div className="container max-w-7xl mx-auto">
            <div className="flex justify-between">
                <div className="max-w-md">
                    <h2 className="font-logoFont">ProtectSphere</h2>
                    <p>Indonesia - Jl. Ahmad Yani Batam Kota. Kota Batam. kepulauan Riau. Indonesia
                    <br></br>contact@protectsphere.com</p>
                </div>
                <div className="">
                    <h2 className="text-lg font-bold">Product</h2>
                    <ul className="text-blue-600">
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div className="">
                    <h2 className="text-lg font-bold">Support</h2>
                    <ul className="text-blue-600">
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div className="">
                    <h2 className="text-lg font-bold">Services</h2>
                    <ul className="text-blue-600">
                        <li><a href="">Penetration Testing</a></li>
                        <li><a href="">Risk Management</a></li>
                        <li><a href="">SIEM</a></li>
                    </ul>
                </div>
                <div className="">
                    <h2 className="text-lg font-bold">Company</h2>
                    <ul className="text-blue-600">
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Blog</a></li>
                    </ul>
                </div>
            </div>
            <div className="text-center mt-5 py-2 border-black border-t-2">
                <span>&copy; Copyright 2024 - Protectsphere, All rights reserved.</span>
            </div>
        </div>
    </footer>
  )
}

export default footer