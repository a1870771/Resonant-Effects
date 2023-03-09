import ArrowRight from "@modules/common/icons/arrow-right"
import Link from "next/link"

type UnderlineLinkProps = {
  href: string
  children?: React.ReactNode
}

const UnderlineLink = ({ href, children }: UnderlineLinkProps) => {
  return (
    <div className="flex items-start">
      <Link href={href}>
        <a className="indent-5 bg-[#ff532b] flex items-center text-base-regular rounded-3xl text-white gap-x-4 py-2 transition-all duration-300 group hover:bg-[#563434] hover:pl-4 hover:pr-1">
          <span>{children}</span>
          <ArrowRight
            size={20}
            className="mr-3 transition-all group-hover:ml-2 duration-300"
          />
        </a>
      </Link>
    </div>
  )
}

export default UnderlineLink
