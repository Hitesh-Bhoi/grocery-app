import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type WishlistItem = {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image_url: string;
  category?: string;
  unit?: string;
};

interface WishlistState {
  wishlistItems: WishlistItem[];
}

const loadWishlistState = (): WishlistItem[] => {
  if (typeof window === 'undefined') return [];
  try {
    const saved = localStorage.getItem('wishlist');
    return saved ? JSON.parse(saved) : [];
  } catch (err) {
    return [];
  }
};

const initialState: WishlistState = {
  wishlistItems: loadWishlistState(),
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    toggleWishlist: (state, action: PayloadAction<WishlistItem>) => {
      const name = action.payload.name.trim();
      console.log("Toggling wishlist item:", name);
      const exists = state.wishlistItems.find(item => item.name.trim() === name);
      if (exists) {
        state.wishlistItems = state.wishlistItems.filter(item => item.name.trim() !== name);
      } else {
        state.wishlistItems.push({ ...action.payload, name });
      }
      console.log("New Wishlist State:", state.wishlistItems);
      if (typeof window !== 'undefined') {
        localStorage.setItem('wishlist', JSON.stringify(state.wishlistItems));
      }
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.wishlistItems = state.wishlistItems.filter(item => item.name !== action.payload);
      if (typeof window !== 'undefined') {
        localStorage.setItem('wishlist', JSON.stringify(state.wishlistItems));
      }
    },
    setWishlistItems: (state, action: PayloadAction<WishlistItem[]>) => {
      state.wishlistItems = action.payload;
    },
    clearWishlist: (state) => {
      state.wishlistItems = [];
      if (typeof window !== 'undefined') {
        localStorage.setItem('wishlist', JSON.stringify([]));
      }
    }
  }
});

export const { toggleWishlist, removeFromWishlist, setWishlistItems, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
