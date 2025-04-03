import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Service.module.css";
import images from "../../img";
const Service = () => {
  return (
    <div className={Style.service}>
      <div className={Style.service_box}>
        <div className={Style.service_box_item}>
          <Image
            src={images.service1}
            alt="Connect Wallet"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Step 1</span>
          </p>
          <h3>Connect Wallet</h3>
          <p>
          Link your crypto wallet to explore, buy NFTs, sell creations, and start earning


          </p>
        </div>
        <div className={Style.service_box_item}>
          <Image
            src={images.service2}
            alt="Browse NFTs"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Step 2</span>
          </p>
          <h3>Browse NFTs </h3>
          <p>
          Discover unique digital assets, place bids, list your own, and grow your collection
          </p>
        </div>
        <div className={Style.service_box_item}>
          <Image
            src={images.service3}
            alt="Trade Securely"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Step 3</span>
          </p>
          <h3>Trade Securely</h3>
          <p>
          Execute instant swaps, verify authenticity, and manage all transactions in one place
          </p>
        </div>
        <div className={Style.service_box_item}>
          <Image
            src={images.service4}
            alt="Earn Rewards"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Step 4</span>
          </p>
          <h3>Earn Rewards</h3>
          <p>
          Profit from sales, earn royalties, and unlock exclusive perks as an active trader
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
