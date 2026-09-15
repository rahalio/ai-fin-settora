export type DemoDeal = {
  dealId: string;
  dealType: 'equityPostTrade' | 'tradeFinance' | 'syndicatedLoan';
  status: 'open' | 'matched' | 'settling' | 'settled' | 'failed' | 'disputed';
  breakCount: number;
  participantIds: string[];
  externalRef?: string;
};

export type DemoBreak = {
  breakId: string;
  dealId: string;
  conflictingFields: string[];
  status: 'open' | 'investigating' | 'resolved' | 'escalated';
  ownerParticipantId?: string;
  dueAt?: string;
  openedAt: string;
};

export type DemoParticipant = {
  participantId: string;
  legalName: string;
  role: string;
  status: 'active' | 'suspended' | 'pending';
  assuranceLevel: string;
};

export const DEMO_DEALS: DemoDeal[] = [
  {
    dealId: 'dea_01JDEMOEQUITY000000000001',
    dealType: 'equityPostTrade',
    status: 'matched',
    breakCount: 0,
    participantIds: ['ptc_broker', 'ptc_custodian'],
    externalRef: 'EQ-DXB-4412',
  },
  {
    dealId: 'dea_01JDEMOBREAK0000000000002',
    dealType: 'equityPostTrade',
    status: 'disputed',
    breakCount: 1,
    participantIds: ['ptc_broker', 'ptc_agent'],
    externalRef: 'EQ-LON-9981',
  },
  {
    dealId: 'dea_01JDEMOTRADEFINANCE000003',
    dealType: 'tradeFinance',
    status: 'settling',
    breakCount: 0,
    participantIds: ['ptc_tfbank', 'ptc_csd'],
    externalRef: 'TF-LC-2201',
  },
];

export const DEMO_BREAKS: DemoBreak[] = [
  {
    breakId: 'brk_01JDEMOBREAKCASE000000001',
    dealId: 'dea_01JDEMOBREAK0000000000002',
    conflictingFields: ['quantity', 'settlementDate'],
    status: 'open',
    ownerParticipantId: 'ptc_broker',
    dueAt: new Date(Date.now() + 6 * 3600_000).toISOString(),
    openedAt: new Date(Date.now() - 2 * 3600_000).toISOString(),
  },
];

export const DEMO_PARTICIPANTS: DemoParticipant[] = [
  {
    participantId: 'ptc_01JBROKER000000000000001',
    legalName: 'Gulf Broker Dealer LLC',
    role: 'brokerDealer',
    status: 'active',
    assuranceLevel: 'LOA3',
  },
  {
    participantId: 'ptc_01JCUSTODIAN000000000002',
    legalName: 'Desert Custodian Bank',
    role: 'custodian',
    status: 'active',
    assuranceLevel: 'LOA3',
  },
  {
    participantId: 'ptc_01JREGULATOR000000000003',
    legalName: 'Corridor Supervisor',
    role: 'regulator',
    status: 'active',
    assuranceLevel: 'LOA2',
  },
];

export const DEMO_AGREED_FIELDS: Record<string, { value: string; parties: string[] }> = {
  isin: { value: 'AE000A1XXXXX', parties: ['broker', 'custodian'] },
  quantity: { value: '250000', parties: ['broker'] },
  settlementDate: { value: '2026-09-17', parties: ['broker', 'custodian'] },
  currency: { value: 'AED', parties: ['broker', 'custodian'] },
  price: { value: '12.45', parties: ['broker', 'custodian'] },
};

export const DEMO_COLLATERAL = [
  {
    lockId: 'clk_01JDEMOLOCK00000000000001',
    dealId: 'dea_01JDEMOTRADEFINANCE000003',
    amount: '1,250,000.00',
    currency: 'AED',
    status: 'locked' as const,
    failRisk: 'medium' as const,
  },
];

export const DEMO_FINALITY = [
  {
    attestationId: 'fat_01JDEMOFINAL000000000001',
    instructionId: 'ins_01JDEMOINS0000000000001',
    dealId: 'dea_01JDEMOEQUITY000000000001',
    status: 'provisional' as const,
    jurisdiction: 'DIFC',
    opinionVersion: 'OP-2026.3',
    recordedAt: new Date().toISOString(),
  },
];
