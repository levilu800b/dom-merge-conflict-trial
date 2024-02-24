/**
 * @jest-environment jsdom
 */

import { getByTestId } from "@testing-library/dom";
import "@testing-library/jest-dom";

import { ProfilePreview } from "../src/profilePreview";

describe("profile preview", () => {
  describe("default options", () => {
    const previewInfo = {
      available: true,
      shortForm: false,
      profileInfo: {
        pictureSrc: "/test",
        name: "John Doe",
        bio: "Lorem ipsum dolor sit amet.",
      },
    };
    Object.freeze(previewInfo);
    Object.freeze(previewInfo.profileInfo);

    const container = ProfilePreview(previewInfo);

    test("contains provided image", () => {
      const image = getByTestId(container, "profilePicture");

      expect(image.src).toContain(previewInfo.profileInfo.pictureSrc);
    });

    test("contains provided name", () => {
      const name = getByTestId(container, "profileName");

      expect(name).toHaveTextContent(previewInfo.profileInfo.name);
    });

    test("contains provided bio", () => {
      const bio = getByTestId(container, "profileBio");

      expect(bio).toHaveTextContent(previewInfo.profileInfo.bio);
    });

    test("contains 3 elements", () => {
      expect(container.childElementCount).toBe(3);
    });
  });

  describe('available option', () => {
    let previewInfo = {};

    beforeEach(() => {
      previewInfo = {
        available: true,
        shortForm: false,
        profileInfo: {
          pictureSrc: '/null',
          name: 'N/A',
          bio: 'N/A',
        },
      };
    });

    test('only notice is displayed with shortform on, available off', () => {
      previewInfo.available = false;
      previewInfo.shortForm = true;

      Object.freeze(previewInfo);
      Object.freeze(previewInfo.profileInfo);

      const container = ProfilePreview(previewInfo);

      expect(container.childElementCount).toBe(1);
      expect(container.children[0]).toHaveTextContent(
        'Profile preview unavailable.'
      );
    });

    test('only notice is displayed with shortform off, available off', () => {
      previewInfo.available = false;
      previewInfo.shortForm = false;

      Object.freeze(previewInfo);
      Object.freeze(previewInfo.profileInfo);

      const container = ProfilePreview(previewInfo);

      expect(container.childElementCount).toBe(1);
      expect(container.children[0]).toHaveTextContent(
        'Profile preview unavailable.'
      );
    });
  });

  describe("short form option", () => {
    const previewInfo = {
      available: true,
      shortForm: true,
      profileInfo: {
        pictureSrc: "/picture",
        name: "Jane Doe",
        bio: "Duis porta neque sed eros.",
      },
    };
    Object.freeze(previewInfo);
    Object.freeze(previewInfo.profileInfo);

    const container = ProfilePreview(previewInfo);

    test("contains provided image", () => {
      const image = getByTestId(container, "profilePicture");

      expect(image.src).toContain(previewInfo.profileInfo.pictureSrc);
    });

    test("contains provided name", () => {
      const name = getByTestId(container, "profileName");

      expect(name).toHaveTextContent(previewInfo.profileInfo.name);
    });

    test("contains 2 elements", () => {
      expect(container.childElementCount).toBe(2);
    });
  });
});
