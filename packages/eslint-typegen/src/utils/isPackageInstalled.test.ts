import { isPackageInstalled } from "@/utils";
import { describe,test,expect } from "vitest";

//----------------------
// Tests
//----------------------

describe("[Function] isPackageInstalled", () => {
  describe("[PASS]",()=>{
    test("isPackageInstalled - local installed", () => {
      expect(isPackageInstalled("vitest")).toBe(true);
    });
  })
  describe("[FAIL]",()=>{
    test("isPackageInstalled - not installed", () => {
      expect(isPackageInstalled("tung-tung-tung-sahur")).toBe(false);
    });
  })
});
