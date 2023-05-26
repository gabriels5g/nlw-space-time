import Image from 'next/image'
import nlwLogo from '../assets/nlw-space-time-logo.svg'
import Link from 'next/link'

export function Hero() {
  return (
    <div className="space-y-5">
      <Image src={nlwLogo} alt="NLW SpaceTime" />
      <div className="max-w-[420px] space-y-4">
        <h1 className="leading-right txt-gray-50 text-4xl font-bold">
          Sua cápsula do tempo
        </h1>
        <p className="text-lg leading-relaxed">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>
      <Link
        href="/memories/new"
        className="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black transition-colors hover:bg-green-600"
      >
        CADASTRAR LEMBRANçA
      </Link>
    </div>
  )
}
