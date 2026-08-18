export interface ReasonCard {
  id: string;
  title: string;
  icon: string;
  tag: string;
  shortDesc: string;
  expandedMemory: string;
  colorTheme: {
    bg: string;
    border: string;
    badge: string;
    badgeText: string;
    iconBg: string;
    iconColor: string;
  };
}

export interface Voucher {
  id: string;
  title: string;
  code: string;
  icon: string;
  description: string;
  terms: string;
  redeemed: boolean;
}

export interface ApologyStats {
  guiltLevel: number;
  loveForDidi: number;
  snackBribeReady: boolean;
  treatsPromised: number;
}
