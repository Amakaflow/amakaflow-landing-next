'use client';

/**
 * Landing hi-fi preview route (AMA-1595).
 * Mobile by default; append ?desktop=1 for the desktop variant.
 * Design-review only — parallel to existing production marketing pages.
 */
import { useEffect, useState } from 'react';
import '../../../styles/redesign-tokens.css';
import { PhonePreview, DesktopPreview } from '../../../components/redesign/preview-helpers';
import { LandingMobile, LandingDesktop } from '../../../components/redesign/screens/marketing';

export default function LandingPreviewPage() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    setIsDesktop(new URLSearchParams(window.location.search).get('desktop') === '1');
  }, []);
  return isDesktop
    ? <DesktopPreview Screen={LandingDesktop} />
    : <PhonePreview Screen={LandingMobile} />;
}
