'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function TestLanguagePage() {
  const { language, t } = useLanguage();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Language Test Page</h1>
      <div className="alert alert-info mb-4">
        <div>
          <span className="text-2xl">Current Language: <strong className="text-3xl">{language.toUpperCase()}</strong></span>
        </div>
      </div>
      
      <div className="flex gap-4 mb-6">
        <p className="text-gray-600 dark:text-gray-400">
          Use the language selector in the navbar to change the language.
        </p>
      </div>
      
      <div className="space-y-4">
        <div className="card bg-base-200 p-4">
          <h2 className="text-xl font-semibold mb-2">NFT Details</h2>
          <p><strong>Name:</strong> {t.nft.name}</p>
          <p><strong>Symbol:</strong> {t.nft.symbol}</p>
          <p><strong>Title:</strong> {t.nft.title}</p>
          <p><strong>Description:</strong> {t.nft.badgeDescription}</p>
        </div>

        <div className="card bg-base-200 p-4">
          <h2 className="text-xl font-semibold mb-2">Actions</h2>
          <p><strong>Donate:</strong> {t.actions.donate}</p>
          <p><strong>Mint NFT:</strong> {t.actions.mintNft}</p>
          <p><strong>Transfer NFT:</strong> {t.actions.transferNft}</p>
        </div>

        <div className="card bg-base-200 p-4">
          <h2 className="text-xl font-semibold mb-2">Messages</h2>
          <p><strong>Thank You:</strong> {t.messages.thankYou}</p>
          <p><strong>Check Wallet:</strong> {t.messages.checkWallet}</p>
        </div>

        <div className="card bg-base-200 p-4">
          <h2 className="text-xl font-semibold mb-2">General</h2>
          <p><strong>Tagline:</strong> {t.general.tagline}</p>
        </div>
      </div>
    </div>
  );
}
