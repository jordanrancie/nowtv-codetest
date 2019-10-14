import members from './members';
import { MEMBERS_LOADED } from '../action-creators/action-types';

describe('members reducer', () => {
  const membersPayload = [
    {
      id: 'fb587e3a-c189-4f29-b847-6b063bae0d0e',
      firstName: 'Philip',
      lastName: 'Howell',
      email: 'phowell15@nymag.com',
      avatar: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
      ip: '72.225.150.86',
    },
    {
      id: '2f6a0efc-27b3-4545-bf7f-980f6b28afd0',
      firstName: 'Henry',
      lastName: 'Elliott',
      email: 'helliott16@apple.com',
      avatar: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
      ip: '82.96.252.113',
    },
  ];

  const membersPayloadTransformed = {
    'fb587e3a-c189-4f29-b847-6b063bae0d0e': {
      id: 'fb587e3a-c189-4f29-b847-6b063bae0d0e',
      firstName: 'Philip',
      lastName: 'Howell',
      email: 'phowell15@nymag.com',
      avatar: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
      ip: '72.225.150.86',
    },
    '2f6a0efc-27b3-4545-bf7f-980f6b28afd0': {
      id: '2f6a0efc-27b3-4545-bf7f-980f6b28afd0',
      firstName: 'Henry',
      lastName: 'Elliott',
      email: 'helliott16@apple.com',
      avatar: 'http://dummyimage.com/100x100.png/ff4444/ffffff',
      ip: '82.96.252.113',
    },
  };

  it('should set members on members loaded', () => {
    expect(
      members({}, {
          type: MEMBERS_LOADED,
          payload: membersPayload,
      })
    ).toEqual(membersPayloadTransformed);
  });
});
