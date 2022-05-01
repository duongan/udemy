import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A first meetup',
        image: 'https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg',
        address: 'Some address 4, 12 some city',
        description: 'This is a first meetup.',
    },
    {
        id: 'm2',
        title: 'A second meetup',
        image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
        address: '123, some street, some city',
        description: 'This is a second meetup.',
    },
];

function HomePage() {
    return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
