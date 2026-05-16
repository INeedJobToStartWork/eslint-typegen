// import { createRequire } from "node:module";
//----------------------
// Types
//----------------------


//----------------------
// Functions
//----------------------

// const require = createRequire(import.meta.url);

/**
 * Check if a package is installed.
 * @param name The package name.
 * @returns True if the package is installed, false otherwise.
 * @internal @dontexport
 */
export const isPackageInstalled =  (name: string) => {
  try {
    import.meta.resolve(name);
    // require.resolve(name);
    return true;
  } catch (error) {
    return false;
  }
};

export default isPackageInstalled;
