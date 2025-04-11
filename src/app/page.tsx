import RadarMap from '@/components/RadarMap';

export default function Home() {
    return (
        <main className='flex flex-col h-screen w-screen overflow-hidden'>
            <h1 className='text-5xl font-bold px-6 py-4'>Hailey Weather Radar</h1>
            <div className='h-screen w-screen'>
                <RadarMap />
            </div>
        </main>
    );
}
