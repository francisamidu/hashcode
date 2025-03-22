export interface DecodeRecord {
  id: string
  hash: string
  msisdn: string
  timestamp: Date
  type: string
  status: string
}

export const decodeHistory: DecodeRecord[] = [
  {
    id: '1',
    hash: '5f4dcc3b5aa765d61d8327deb882cf99',
    msisdn: '+254712345678',
    timestamp: new Date(2023, 3, 16, 14, 30),
    type: 'Single',
    status: 'Success'
  },
  {
    id: '2',
    hash: '7c6a180b36896a0a8c02787eeafb0e4c',
    msisdn: '+254723456789',
    timestamp: new Date(2023, 3, 16, 12, 15),
    type: 'Batch',
    status: 'Success'
  },
  {
    id: '3',
    hash: '6cb75f652a9b52798eb6cf2201057c73',
    msisdn: '+254734567890',
    timestamp: new Date(2023, 3, 16, 10, 45),
    type: 'Single',
    status: 'Success'
  },
  {
    id: '4',
    hash: 'e10adc3949ba59abbe56e057f20f883e',
    msisdn: '+254745678901',
    timestamp: new Date(2023, 3, 16, 9, 20),
    type: 'Batch',
    status: 'Failed'
  },
  {
    id: '5',
    hash: 'd8578edf8458ce06fbc5bb76a58c5ca4',
    msisdn: '+254756789012',
    timestamp: new Date(2023, 3, 15, 17, 10),
    type: 'Single',
    status: 'Success'
  },
  {
    id: '6',
    hash: '25f9e794323b453885f5181f1b624d0b',
    msisdn: '+254767890123',
    timestamp: new Date(2023, 3, 15, 15, 45),
    type: 'Batch',
    status: 'Success'
  },
  {
    id: '7',
    hash: '827ccb0eea8a706c4c34a16891f84e7b',
    msisdn: '+254778901234',
    timestamp: new Date(2023, 3, 15, 14, 30),
    type: 'Single',
    status: 'Success'
  },
  {
    id: '8',
    hash: 'e99a18c428cb38d5f260853678922e03',
    msisdn: '+254789012345',
    timestamp: new Date(2023, 3, 15, 11, 20),
    type: 'Batch',
    status: 'Success'
  }
]
