import { useState, useEffect } from "react";
import "./FlashSale.css";

import sp10 from "../../img/sp10.jpg";
import sp90 from "../../img/sp90.jpg";
import sp57 from "../../img/sp57.jpg";
import sp95 from "../../img/sp95.jpg";
import sp14 from "../../img/sp14.jpg";

function FlashSale() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const endDate = new Date().getTime() + 24 * 60 * 60 * 1000;

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        ),
        minutes: Math.floor(
          (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        ),
        seconds: Math.floor(
          (distance % (1000 * 60)) / 1000
        ),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const products = [
    {
      img: sp10,
      name: "Bếp từ lắp âm 2 vùng nấu",
      oldPrice: 7200000,
      newPrice: 5500000,
    },
    {
      img: sp90,
      name: "Nồi chiên không dầu dung tích lớn 8L",
      oldPrice: 1690000,
      newPrice: 989000,
    },
    {
      img: sp57,
      name: "Máy lọc nước điện giải ion kiềm",
      oldPrice: 1000000,
      newPrice: 790000,
    },
    {
      img: sp95,
      name: "Nồi cơm điện tử 1.8L",
      oldPrice: 890000,
      newPrice: 590000,
    },
    {
      img: sp14,
      name: "Bàn ủi hơi nước công suất lớn",
      oldPrice: 690000,
      newPrice: 490000,
    },
  ];

  return (
    <section className="flash-sale">

      <h2 className="flash-title">⚡ FLASH SALE HÔM NAY</h2>

      {/* COUNTDOWN */}
      <div className="countdown">
        <div className="time-box">
          <div className="time-number">{timeLeft.hours}</div>
          <div className="time-label">Giờ</div>
        </div>

        <div className="time-box">
          <div className="time-number">{timeLeft.minutes}</div>
          <div className="time-label">Phút</div>
        </div>

        <div className="time-box">
          <div className="time-number">{timeLeft.seconds}</div>
          <div className="time-label">Giây</div>
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="flash-products">

        {products.map((item, index) => (
          <div className="product" key={index}>

            {/* FIXED BADGE */}
            <span className="flash-discount">-50%</span>

            <img src={item.img} alt={item.name} />

            <p className="name">{item.name}</p>

            <div className="price">
              <span className="new">
                {item.newPrice.toLocaleString()}đ
              </span>

              <span className="old">
                {item.oldPrice.toLocaleString()}đ
              </span>
            </div>

          </div>
        ))}

      </div>

      <p className="sale-text">
        Giảm giá lên đến 50% cho sản phẩm gia dụng
      </p>

      <button className="sale-btn">
        Mua ngay
      </button>

    </section>
  );
}

export default FlashSale;