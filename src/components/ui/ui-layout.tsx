'use client'
import * as React from 'react'
import {ReactNode, Suspense, useEffect, useRef} from 'react'
import { TabMenu } from '@/components/ui/tab-menu';
import { useLanguage } from '@/contexts/LanguageContext';

export function UiLayout({ children }: { children: ReactNode }) {
  const { t } = useLanguage();
  
  const links = [
    { label: t.nav.home, path: '/home' },
    { label: t.nav.project, path: '/project' },
    { label: t.nav.roadmap, path: '/roadmap' },
    { label: t.nav.aboutUs, path: '/aboutus' },
    { label: t.nav.applicationDemo, path: '/application' },
    { label: t.nav.contactUs, path: '/contactus' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Fixed TabMenu */}
      <TabMenu links={links} />

      {/* Content Below Fixed Menu */}
      <div className="w-full flex-1 flex flex-col">
        {/* Add margin-top to prevent overlap with the fixed menu */}
        <Suspense
          fallback={
            <div className="text-center my-32">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          }
        >
          {children}
        </Suspense>
      </div>

      <footer className="footer footer-center mt-auto p-4 bg-gradient-to-r from-green-900 via-green-800 to-green-700 text-white">
        <aside>
          <p>
            @2025 Created by{' '}
            <a
              className="link hover:text-white"
              href="https://github.com/daniel-burlacu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Daniel Burlacu
            </a>
          </p>
        </aside>
      </footer>
    </div>
  );
}

export function AppModal({
  children,
  title,
  hide,
  show,
  submit,
  submitDisabled,
  submitLabel,
}: {
  children: ReactNode
  title: string
  hide: () => void
  show: boolean
  submit?: () => void
  submitDisabled?: boolean
  submitLabel?: string
}) {
  const dialogRef = useRef<HTMLDialogElement | null>(null)

  useEffect(() => {
    if (!dialogRef.current) return
    if (show) {
      dialogRef.current.showModal()
    } else {
      dialogRef.current.close()
    }
  }, [show, dialogRef])

  return (
    <dialog className="modal" ref={dialogRef}>
      <div className="modal-box space-y-5">
        <h3 className="font-bold text-lg">{title}</h3>
        {children}
        <div className="modal-action">
          <div className="join space-x-2">
            {submit ? (
              <button className="btn btn-xs lg:btn-md btn-primary" onClick={submit} disabled={submitDisabled}>
                {submitLabel || 'Save'}
              </button>
            ) : null}
            <button onClick={hide} className="btn">
              Close
            </button>
          </div>
        </div>
      </div>
    </dialog>
  )
}

export function AppHero({
  children,
  title,
  subtitle,
}: {
  children?: ReactNode
  title: ReactNode
  subtitle: ReactNode
}) {
  return (
    <div className="hero py-[24px]">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          {typeof title === 'string' ? <h1 className="text-5xl font-bold">{title}</h1> : title}
          {typeof subtitle === 'string' ? <p className="py-6">{subtitle}</p> : subtitle}
          {children}
        </div>
      </div>
    </div>
  )
}

