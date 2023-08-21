import React from 'react';
import Hero from '../components/hero';
import HeroIMG from "../assets/image/heroImage.png";
import "./Home.css";
import NFTcard from '../components/nftCard';

const Home = () => {
    return (
        <main>
            <Hero
                heroTitle="Discover Digital Art, Collect and Sell Your Specific NFTs"
                heroUrl={HeroIMG}
                herosubTitle="Partner with one of the worlds largerst retailers to chowcase your brand and products"
            />
            <section className='mrlr50 liveBidding'>
                <div className='sectionTitle'>Live Bidding</div>
                <div className='cardCointainer'>
                    <NFTcard 
                        nfturl="https://i.seadn.io/gcs/files/6b637762f2449abd955184171bd2743f.png?auto=format&dpr=1&w=1000"
                        nftName="Nakamigos"
                        nftNumber = {8345}
                        price= {0.2843}
                        lastprice= {0.45}
                    />
                    <NFTcard 
                        nfturl="https://i.seadn.io/gcs/files/e24c57e8779c4997d363be1246c22a5a.png?auto=format&dpr=1&w=1000"
                        nftName="Azuki Elementals"
                        nftNumber = {13706}
                        price= {0.423}
                        lastprice= {1.67}
                    />
                    <NFTcard 
                        nfturl="https://i.seadn.io/gcs/files/ac68ebc2ef89cff1b420205edd6fa2a5.png?auto=format&dpr=1&w=1000"
                        nftName="Planies NFT"
                        nftNumber = {3536}
                        price= {0.123}
                        lastprice= {0}
                    />
                    <NFTcard 
                        nfturl="https://i.seadn.io/gcs/files/e24c57e8779c4997d363be1246c22a5a.png?auto=format&dpr=1&w=1000"
                        nftName="Azuki Elementals"
                        nftNumber = {13706}
                        price= {0.423}
                        lastprice= {1.67}
                    />
                    <NFTcard 
                        nfturl="https://i.seadn.io/gcs/files/ac68ebc2ef89cff1b420205edd6fa2a5.png?auto=format&dpr=1&w=1000"
                        nftName="Planies NFT"
                        nftNumber = {3536}
                        price= {0.123}
                        lastprice= {0}
                    />
                    <NFTcard 
                        nfturl="https://i.seadn.io/gcs/files/6b637762f2449abd955184171bd2743f.png?auto=format&dpr=1&w=1000"
                        nftName="Nakamigos"
                        nftNumber = {8345}
                        price= {0.2843}
                        lastprice= {0.45}
                    />
                    <NFTcard 
                        nfturl="https://i.seadn.io/gcs/files/e24c57e8779c4997d363be1246c22a5a.png?auto=format&dpr=1&w=1000"
                        nftName="Azuki Elementals"
                        nftNumber = {13706}
                        price= {0.423}
                        lastprice= {1.67}
                    />
                    <NFTcard 
                        nfturl="https://i.seadn.io/gcs/files/ac68ebc2ef89cff1b420205edd6fa2a5.png?auto=format&dpr=1&w=1000"
                        nftName="Planies NFT"
                        nftNumber = {3536}
                        price= {0.123}
                        lastprice= {0}
                    />
                    <NFTcard 
                        nfturl="https://i.seadn.io/gcs/files/e24c57e8779c4997d363be1246c22a5a.png?auto=format&dpr=1&w=1000"
                        nftName="Azuki Elementals"
                        nftNumber = {13706}
                        price= {0.423}
                        lastprice= {1.67}
                    />
                    <NFTcard 
                        nfturl="https://i.seadn.io/gcs/files/ac68ebc2ef89cff1b420205edd6fa2a5.png?auto=format&dpr=1&w=1000"
                        nftName="Planies NFT"
                        nftNumber = {3536}
                        price= {0.123}
                        lastprice= {0}
                    />
                </div>
            </section>
        </main>
    );
}

export default Home;