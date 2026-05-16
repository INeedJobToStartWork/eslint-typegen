import { getPackage, MY_ERRORS_GET_PACKAGE } from "@/utils";
import { myError } from "oh-my-error";
import { test, expect, describe } from "vitest";

//----------------------
// Tests
//----------------------

describe("getPackage", async () => {
  describe("[PASS]",()=>{
    test("getPackage - local installed", async () => {
      const packageJson = (await getPackage("vitest"));
      expect(packageJson).toBeDefined();
    });
  })
  describe("[FAIL]",()=>{
    test("getPackage - not installed", async () => {
      await expect(getPackage("tung-tung-tung-sahur"))
        .rejects
        .toThrowError(myError(MY_ERRORS_GET_PACKAGE.PACKAGE_NOT_INSTALLED, { message:["tung-tung-tung-sahur"]}));
    })
  });
  });
