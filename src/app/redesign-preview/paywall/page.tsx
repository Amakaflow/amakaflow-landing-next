'use client';

/**
 * Paywall hi-fi preview route (AMA-1595).
 * Mobile by default; append ?desktop=1 for the desktop variant.
 * Design-review only — not wired to billing.
 */
import { useEffect, useState } from 'react';
import '../../../styles/redesign-tokens.css';
import { PhonePreview, DesktopPreview } from '../../../components/redesign/preview-helpers';
import { PaywallMobile, PaywallDesktop } from '../../../components/redesign/screens/marketing';

export default function PaywallPreviewPage() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    setIsDesktop(new URLSearchParams(window.location.search).get('desktop') === '1');
  }, []);
  return isDesktop
    ? <DesktopPreview Screen={PaywallDesktop} />
    : <PhonePreview Screen={PaywallMobile} />;
}
