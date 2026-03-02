export const MOCK_CONVERSATIONS = [
    {
        id: 1,
        name: 'Floyd Miles',
        channel: 'email',
        time: '9:15 AM',
        subject: 'Website loading slowly',
        summary: 'User reports slow load times on the landing page; experiencing delays during peak hours.',
        snippet: "Hello, I received a damaged product and I'd like to arrange for a return or exchange.",
        unread: true,
        tags: ['Support'],
        messages: [
            {
                id: 101,
                sender: 'Floyd Miles',
                email: 'floyd@miles.com',
                time: 'Aug 09, 9:15 AM',
                body: "Hi Support team, our website is loading extremely slowly for several users. Could you please investigate if there's any server issues?",
                type: 'incoming'
            }
        ]
    },
    {
        id: 2,
        name: 'Kate Hyde',
        channel: 'email',
        time: 'Aug 09',
        subject: '401 Error When Using Your API Authentication Endpoint',
        summary: 'Customer reports authentication failure (401) when connecting to the production API; works fine in sandbox.',
        snippet: 'I am getting a 401 error when I try to...',
        unread: false,
        tags: ['Support'],
        messages: [
            {
                id: 201,
                sender: 'Kate Hyde',
                email: 'kate@google.com',
                time: 'Aug 09, 9:30 PM',
                body: "Hi, We’re having trouble authenticating with your DataSync API in production. Calls to https://api.yourcompany.com/v2/auth/token return a 401 Unauthorized error, even though the same API key works in our sandbox environment.",
                type: 'incoming'
            }
        ]
    },
    {
        id: 3,
        name: 'Theresa Webb',
        channel: 'email',
        time: 'Aug 09',
        subject: 'Issue with the app',
        summary: 'Account balance discrepancy reported; customer sees negative balance.',
        snippet: "Hey, I think there's an issue with my account balance.",
        unread: false,
        tags: ['Finance', 'High'],
        messages: [
            {
                id: 301,
                sender: 'Theresa Webb',
                email: 'theresa@webb.com',
                time: 'Aug 09, 10:00 AM',
                body: "Hello, I just checked my app and my balance seems incorrect. It shows -$500 but I should have around $1200.",
                type: 'incoming'
            }
        ]
    },
    {
        id: 4,
        name: 'Alfredo Dorwart',
        channel: 'slack',
        time: 'Aug 09',
        subject: 'Security breach suspected',
        summary: 'Potential unauthorized access detected in logs; multiple failed login attempts from unknown IP.',
        snippet: 'Security breach suspected; unauthorized access to user data...',
        unread: false,
        tags: ['Alert'],
        messages: [
            {
                id: 401,
                sender: 'Alfredo Dorwart',
                email: 'alfredo@slack.com',
                time: 'Aug 09, 11:45 AM',
                body: "Hey, we noticed some suspicious activity on the server. There were 50+ failed login attempts within 2 minutes. Please check the security logs as soon as possible.",
                type: 'incoming'
            }
        ]
    },
    {
        id: 5,
        name: 'Cameron Williamson',
        channel: 'chat',
        time: 'Aug 09',
        subject: 'Login issues',
        summary: 'Multiple users restricted from accessing dashboard; password reset loop reported.',
        snippet: 'Login issues; users are unable to access their accounts...',
        unread: true,
        tags: ['Tech'],
        messages: [
            {
                id: 501,
                sender: 'Cameron Williamson',
                email: 'cameron@chat.com',
                time: 'Aug 09, 1:20 PM',
                body: "Users are reporting that they can't log in. They're stuck in a password reset loop. Is the auth service down?",
                type: 'incoming'
            }
        ]
    }
];
