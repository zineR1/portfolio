import { describe, it, expect } from "vitest";
import { useEffect } from "react";
import { render, waitFor } from "@testing-library/react";
import { useGetDeviceType } from ".";

type DeviceType = ReturnType<typeof useGetDeviceType>;

const TestComponent = ({
  onResult,
}: {
  onResult: (result: DeviceType) => void;
}) => {
  const result = useGetDeviceType();
  useEffect(() => {
    onResult(result);
  }, [result, onResult]);
  return null;
};

describe("useGetDeviceType hook", () => {
  it("returns correct breakpoint for xs", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 500,
    });
    let hookResult: DeviceType | undefined;
    render(<TestComponent onResult={(r) => (hookResult = r)} />);
    expect(hookResult?.breakpoint).toBe("xs");
    expect(hookResult?.isMobile).toBe(true);
    expect(hookResult?.isTablet).toBe(false);
    expect(hookResult?.isDesktop).toBe(false);
  });

  it("returns correct breakpoint for sm", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 700,
    });
    let hookResult: DeviceType | undefined;
    render(<TestComponent onResult={(r) => (hookResult = r)} />);
    expect(hookResult?.breakpoint).toBe("sm");
    expect(hookResult?.isMobile).toBe(true);
    expect(hookResult?.isTablet).toBe(false);
    expect(hookResult?.isDesktop).toBe(false);
  });

  it("returns correct breakpoint for md", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 800,
    });
    let hookResult: DeviceType | undefined;
    render(<TestComponent onResult={(r) => (hookResult = r)} />);
    expect(hookResult?.breakpoint).toBe("md");
    expect(hookResult?.isTablet).toBe(true);
    expect(hookResult?.isMobile).toBe(false);
    expect(hookResult?.isDesktop).toBe(false);
  });

  it("returns correct breakpoint for xl", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1400,
    });
    let hookResult: DeviceType | undefined;
    render(<TestComponent onResult={(r) => (hookResult = r)} />);
    expect(hookResult?.breakpoint).toBe("xl");
    expect(hookResult?.isDesktop).toBe(true);
    expect(hookResult?.isMobile).toBe(false);
    expect(hookResult?.isTablet).toBe(false);
  });

  it("updates breakpoint when window is resized up", async () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 500,
    });
    let hookResult: DeviceType | undefined;
    render(<TestComponent onResult={(r) => (hookResult = r)} />);

    window.innerWidth = 1100;
    window.dispatchEvent(new Event("resize"));

    await waitFor(() => {
      expect(hookResult?.breakpoint).toBe("lg");
      expect(hookResult?.isDesktop).toBe(true);
      expect(hookResult?.isMobile).toBe(false);
      expect(hookResult?.isTablet).toBe(false);
    });
  });

  it("updates breakpoint when window is resized down", async () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1400,
    });
    let hookResult: DeviceType | undefined;
    render(<TestComponent onResult={(r) => (hookResult = r)} />);

    window.innerWidth = 800;
    window.dispatchEvent(new Event("resize"));

    await waitFor(() => {
      expect(hookResult?.breakpoint).toBe("md");
      expect(hookResult?.isTablet).toBe(true);
      expect(hookResult?.isMobile).toBe(false);
      expect(hookResult?.isDesktop).toBe(false);
    });
  });
});