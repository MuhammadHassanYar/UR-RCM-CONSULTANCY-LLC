'use client';

import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'full' | 'icon-only' | 'stacked';
  className?: string;
  theme?: 'light' | 'dark';
  onClick?: () => void;
}

export function Logo({
  variant = 'full',
  className = '',
  theme = 'light',
  onClick,
}: LogoProps) {
  const isDark = theme === 'dark';
  const textColor = isDark ? '#FFFFFF' : '#0066CC';
  const subtextColor = '#00A859';

  return (
    <Link
      href="/"
      id="brand-logo-link"
      onClick={onClick}
      className={`inline-flex items-center gap-3 transition-transform hover:opacity-95 select-none ${className}`}
      aria-label="UR RCM CONSULTANCY LLC Home"
    >
      {/* Dynamic 3D Spherical Mosaic Icon */}
      <svg
        viewBox="0 0 160 160"
        className="w-9 h-9 sm:w-11 sm:h-11 shrink-0 drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g transform="translate(5, 5)">
          {/* Latitude 1 (Upper Arc) */}
          <path d="M 68 22 C 72 20, 77 19, 82 19 C 85 19, 87 20, 90 21 L 88 27 C 86 26, 84 26, 81 26 C 77 26, 73 27, 70 28 Z" fill="#0066CC" />
          <path d="M 94 22 C 99 24, 104 27, 109 30 L 105 35 C 101 32, 97 30, 93 28 Z" fill="#0066CC" />
          <path d="M 113 33 C 117 37, 120 41, 123 46 L 118 49 C 115 45, 112 41, 108 38 Z" fill="#00A859" />
          <path d="M 126 50 C 128 55, 129 61, 130 67 L 124 67 C 123 62, 122 57, 120 53 Z" fill="#0066CC" />

          {/* Latitude 2 */}
          <path d="M 52 30 C 58 27, 63 24, 69 22 L 72 28 C 67 30, 62 33, 56 36 Z" fill="#0066CC" />
          <path d="M 73 30 C 78 28, 84 27, 90 27 L 91 34 C 86 34, 81 35, 76 37 Z" fill="#0066CC" />
          <path d="M 95 29 C 100 31, 106 34, 111 38 L 107 44 C 103 41, 98 38, 93 36 Z" fill="#00A859" />
          <path d="M 115 41 C 119 46, 122 51, 125 57 L 119 60 C 117 55, 114 50, 110 46 Z" fill="#0066CC" />
          <path d="M 127 61 C 128 66, 129 72, 129 78 L 123 78 C 123 72, 122 67, 121 63 Z" fill="#00A859" />

          {/* Latitude 3 */}
          <path d="M 38 43 C 44 38, 49 34, 55 31 L 59 38 C 54 41, 49 44, 44 48 Z" fill="#0066CC" />
          <path d="M 59 39 C 65 35, 71 33, 78 32 L 80 39 C 74 40, 68 42, 63 46 Z" fill="#0066CC" />
          <path d="M 82 35 C 88 34, 95 34, 101 36 L 100 43 C 95 42, 89 42, 84 43 Z" fill="#00A859" />
          <path d="M 105 39 C 111 43, 116 48, 121 53 L 116 58 C 111 54, 107 49, 102 46 Z" fill="#0066CC" />
          <path d="M 124 57 C 127 63, 129 70, 130 77 L 124 78 C 123 72, 121 66, 118 61 Z" fill="#0066CC" />

          {/* Latitude 4 */}
          <path d="M 28 60 C 33 53, 39 48, 45 44 L 50 51 C 45 55, 40 60, 35 66 Z" fill="#0066CC" />
          <path d="M 48 53 C 54 48, 62 44, 69 42 L 72 49 C 66 51, 59 55, 54 60 Z" fill="#0066CC" />
          <path d="M 73 45 C 80 43, 87 42, 95 43 L 95 50 C 88 50, 82 51, 75 53 Z" fill="#0066CC" />
          <path d="M 98 46 C 104 48, 111 52, 116 57 L 112 63 C 107 58, 101 55, 96 53 Z" fill="#00A859" />
          <path d="M 120 60 C 124 67, 127 74, 128 82 L 122 83 C 121 76, 118 70, 115 64 Z" fill="#0066CC" />

          {/* Latitude 5 (Equator) */}
          <path d="M 23 80 C 26 72, 31 66, 36 60 L 42 66 C 38 71, 34 77, 31 84 Z" fill="#0066CC" />
          <path d="M 40 68 C 47 62, 55 57, 63 54 L 67 62 C 60 64, 53 69, 47 74 Z" fill="#0066CC" />
          <path d="M 67 58 C 75 55, 83 54, 92 54 L 92 62 C 84 62, 77 63, 70 66 Z" fill="#00A859" />
          <path d="M 95 56 C 102 58, 108 62, 114 67 L 109 74 C 104 69, 99 66, 93 64 Z" fill="#0066CC" />

          {/* Latitude 6 */}
          <path d="M 23 98 C 24 90, 27 83, 31 77 L 38 82 C 35 87, 32 93, 31 100 Z" fill="#0066CC" />
          <path d="M 37 84 C 44 78, 52 73, 61 70 L 64 78 C 57 80, 50 84, 44 90 Z" fill="#0066CC" />
          <path d="M 64 73 C 72 70, 81 68, 90 69 L 89 77 C 82 76, 74 77, 67 80 Z" fill="#0066CC" />
          <path d="M 93 72 C 99 74, 105 77, 110 82 L 105 88 C 101 84, 96 81, 90 79 Z" fill="#00A859" />

          {/* Latitude 7 */}
          <path d="M 29 116 C 28 109, 29 101, 32 94 L 39 98 C 37 103, 36 109, 37 116 Z" fill="#0066CC" />
          <path d="M 40 98 C 46 93, 54 88, 62 85 L 66 93 C 59 95, 52 99, 47 104 Z" fill="#0066CC" />
          <path d="M 66 87 C 74 84, 83 83, 91 83 L 91 91 C 84 91, 76 92, 69 95 Z" fill="#00A859" />
          <path d="M 94 85 C 100 87, 106 90, 111 95 L 106 101 C 102 97, 97 94, 91 92 Z" fill="#0066CC" />

          {/* Latitude 8 */}
          <path d="M 38 132 C 35 126, 34 119, 35 112 L 43 114 C 42 119, 43 125, 46 130 Z" fill="#0066CC" />
          <path d="M 47 113 C 54 107, 61 103, 69 100 L 73 108 C 66 110, 60 114, 54 119 Z" fill="#0066CC" />
          <path d="M 72 101 C 80 99, 88 98, 96 98 L 95 106 C 88 106, 81 107, 74 109 Z" fill="#0066CC" />
          <path d="M 98 100 C 104 102, 110 105, 114 110 L 109 116 C 105 112, 100 109, 95 107 Z" fill="#00A859" />

          {/* Latitude 9 (Lower Arc) */}
          <path d="M 53 144 C 48 139, 45 134, 43 128 L 50 124 C 52 129, 55 134, 59 138 Z" fill="#0066CC" />
          <path d="M 59 127 C 66 122, 73 118, 81 115 L 84 123 C 78 125, 72 128, 66 133 Z" fill="#0066CC" />
          <path d="M 83 115 C 90 114, 97 113, 104 113 L 103 121 C 97 121, 91 121, 85 123 Z" fill="#0066CC" />

          {/* Dynamic Dissolving Emerald & Blue Accent Tiles */}
          <rect x="118" y="28" width="8" height="8" rx="1.5" transform="rotate(18 118 28)" fill="#00A859" />
          <rect x="130" y="38" width="9" height="9" rx="1.5" transform="rotate(24 130 38)" fill="#00A859" />
          <rect x="142" y="50" width="8" height="8" rx="1.5" transform="rotate(30 142 50)" fill="#00A859" />
          <rect x="122" y="74" width="9" height="9" rx="1.5" transform="rotate(12 122 74)" fill="#0066CC" />
          <rect x="134" y="85" width="8" height="8" rx="1.5" transform="rotate(16 134 85)" fill="#00A859" />
          <rect x="120" y="105" width="8" height="8" rx="1.5" transform="rotate(-15 120 105)" fill="#0066CC" />
          <rect x="132" y="118" width="8" height="8" rx="1.5" transform="rotate(-22 132 118)" fill="#00A859" />
          <rect x="110" y="128" width="9" height="9" rx="1.5" transform="rotate(-30 110 128)" fill="#0066CC" />
          <rect x="124" y="136" width="7" height="7" rx="1.5" transform="rotate(-35 124 136)" fill="#00A859" />
        </g>
      </svg>

      {/* Brand Typography */}
      {variant !== 'icon-only' && (
        <div className="flex flex-col text-left leading-none">
          <span
            className="font-black tracking-tight text-lg sm:text-2xl"
            style={{ color: textColor }}
          >
            UR RCM
          </span>
          <span
            className="font-bold text-[8.5px] sm:text-[10.5px] tracking-[0.24em] sm:tracking-[0.38em] uppercase mt-0.5"
            style={{ color: subtextColor }}
          >
            CONSULTANCY
          </span>
        </div>
      )}
    </Link>
  );
}
