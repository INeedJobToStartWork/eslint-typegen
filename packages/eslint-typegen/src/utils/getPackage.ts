import { isPackageInstalled } from "@/utils";
import { IMyError, myError, TAllMyErrorTypes, TMyErrorList } from "oh-my-error";


//----------------------
// Errors
//----------------------

/** Error object for getPackage function. @internal @dontexport */
export const MY_ERRORS_GET_PACKAGE = {
  PACKAGE_NOT_INSTALLED: {
    code: "PACKAGE_NOT_INSTALLED",
    name: "Package is not installed",
    message: (packageName: string) => `Package ${packageName} is not installed.`,
    hint: "Please install the package first.",
  },
} as const satisfies TMyErrorList<IMyError>

//----------------------
// Types
//----------------------

//----------------------
// Functions
//----------------------

/**
 * Get package from npm registry if it's not installed already.
 * @param name Package name to get.
 * @returns Promise that resolves to the package module.
 * @internal @dontexport
 */
export const getPackage = async (name: string) => {
  if (isPackageInstalled(name)) return import(import.meta.resolve(name));
  throw myError(MY_ERRORS_GET_PACKAGE.PACKAGE_NOT_INSTALLED, {message:[name]});
};

export default getPackage;
