/*
 * @Author: chrissy wx2048@protonmail.com
 * @Date: 2025-08-14 11:31:26
 * @LastEditors: chrissy wx2048@protonmail.com
 * @LastEditTime: 2025-08-14 11:36:01
 * @Description: to be added
 */
import CustomLink from "@/components/CustomLink";

export default function NotFound() {
  return (
    <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
      <div className="space-x-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
          404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          Sorry we could not find this page.
        </p>
        <p className="mb-8">But do not worry, you can find plenty of other things on our homepage.</p>
        <CustomLink href="/">
          <button className="focus:shadow-outline-green inline rounded-lg border border-transparent bg-green-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-green-700 focus:outline-none dark:hover:bg-green-500">
            Back to homepage
          </button>
        </CustomLink>
      </div>
    </div>
  )
}
