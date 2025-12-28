import React from 'react';
import {
  FacebookShareButton, FacebookIcon,
  WhatsappShareButton, WhatsappIcon,
  TwitterShareButton, TwitterIcon
} from 'react-share';

const SocialShare = ({ title, url }) => {
    return (
        <div className="flex gap-4 mt-6 justify-center p-4 bg-white/50 rounded-xl backdrop-blur-sm">
            <p className="font-bold text-kid-dark self-center">শেয়ার করো:</p>
            <FacebookShareButton url={url} quote={title}>
                <FacebookIcon size={40} round />
            </FacebookShareButton>
            <WhatsappShareButton url={url} title={title}>
                <WhatsappIcon size={40} round />
            </WhatsappShareButton>
            <TwitterShareButton url={url} title={title}>
                <TwitterIcon size={40} round />
            </TwitterShareButton>
        </div>
    );
};

export default SocialShare;