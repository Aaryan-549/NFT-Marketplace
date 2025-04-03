import React, { useState, useEffect, useContext } from "react";

// INTERNAL IMPORT
import Style from "../styles/index.module.css";
import {
  HeroSection,
  Service,
  BigNFTSilder,
  Subscribe,
  Title,
  Category,
  Filter,
  NFTCard,
  Collection,
  AudioLive,
  FollowerTab,
  Slider,
  Brand,
  Video,
  Loader,
} from "../components/componentsindex";
import { getTopCreators } from "../TopCreators/TopCreators";

// IMPORTING CONTRACT DATA
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const Home = () => {
  const { checkIfWalletConnected, currentAccount, fetchNFTs } = useContext(
    NFTMarketplaceContext
  );
  const [nfts, setNfts] = useState([]);
  const [nftsCopy, setNftsCopy] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  useEffect(() => {
    const loadNFTs = async () => {
      try {
        setLoading(true);
        if (currentAccount) {
          const items = await fetchNFTs();
          setNfts(items?.reverse() || []);
          setNftsCopy(items || []);
        }
      } catch (error) {
        console.error("Error fetching NFTs:", error);
        setNfts([]);
        setNftsCopy([]);
      } finally {
        setLoading(false);
      }
    };

    loadNFTs();
  }, [currentAccount]);

  // CREATOR LIST
  const creators = getTopCreators(nfts || []);

  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSilder />
      <Title
        heading="Audio Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <AudioLive />
      
      {loading ? <Loader /> : creators?.length > 0 && <FollowerTab TopCreator={creators} />}

      <Slider />
      <Collection />
      <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <Filter />
      
      {loading ? <Loader /> : (Array.isArray(nfts) && nfts.length > 0) ? (
        <NFTCard NFTData={nfts} />
      ) : (
        <div>No NFTs found</div>
      )}

      <Title
        heading="Browse by category"
        paragraph="Explore the NFTs in the most featured categories."
      />
      <Category />
      <Subscribe />
      <Brand />
      <Video />
    </div>
  );
};

export default Home;