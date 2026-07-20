import {
  Box,
  Card,
  CardContent,
  TextField,
  Typography,
  Slider,
  Rating,
  Grid,
  Button,
} from "@mui/material";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";

import { type FilterState } from "../types/recipe";

interface FilterPanelProps {
  filters: FilterState;
  onChange: (newFilters: FilterState) => void;
}

const DEFAULT_FILTERS: FilterState = {
  searchQuery: "",
  minRating: 0,
  maxCalories: 1000,
  maxCookTime: 120,
};

export const FilterPanel = ({ filters, onChange }: FilterPanelProps) => {
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...filters, searchQuery: e.target.value });
  };

  const handleSliderChange =
    (field: keyof FilterState) => (_: Event, value: number | number[]) => {
      onChange({ ...filters, [field]: value as number });
    };

  const handleRatingChange = (
    _: React.SyntheticEvent,
    value: number | null,
  ) => {
    onChange({ ...filters, minRating: value || 0 });
  };

  const handleReset = () => {
    onChange(DEFAULT_FILTERS);
  };

  return (
    <Card
      sx={{ mb: 4, bgcolor: "background.paper", borderRadius: 3 }}
      elevation={2}
    >
      <CardContent sx={{ p: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography
            sx={{ variant: "h6", fontWeight: 600, color: "text.primary" }}
          >
            Filter Recipes
          </Typography>
          <Button
            size="small"
            variant="outlined"
            color="secondary"
            startIcon={<FilterAltOffIcon />}
            onClick={handleReset}
          >
            Reset Filters
          </Button>
        </Box>

        <Grid container spacing={4} sx={{ alignItems: "center" }}>
          {/* Text Search Input */}
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label="Search by recipe name..."
              variant="outlined"
              value={filters.searchQuery}
              onChange={handleTextChange}
              size="small"
            />
          </Grid>

          {/* Rating Filter */}
          <Grid size={{ xs: 12, md: 2, sm: 6 }}>
            <Typography sx={{ variant: "body2", fontWeight: 500 }} gutterBottom>
              Minimum Rating
            </Typography>
            <Rating
              name="min-rating"
              value={filters.minRating}
              precision={0.5}
              onChange={handleRatingChange}
            />
          </Grid>

          {/* Calorie Range Slider */}
          <Grid size={{ xs: 12, md: 3, sm: 6 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                sx={{ variant: "body2", fontWeight: 500 }}
                gutterBottom
              >
                Max Calories
              </Typography>
              <Typography
                sx={{
                  variant: "body2",
                  color: "primary.main",
                  fontWeight: 600,
                }}
              >
                {filters.maxCalories} kcal
              </Typography>
            </Box>
            <Slider
              value={filters.maxCalories}
              min={100}
              max={1000}
              step={50}
              onChange={handleSliderChange("maxCalories")}
              valueLabelDisplay="auto"
              size="small"
            />
          </Grid>

          {/* Cook Time Slider */}
          <Grid size={{ xs: 12, md: 3, sm: 6 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                sx={{ variant: "body2", fontWeight: 500 }}
                gutterBottom
              >
                Max Cook Time
              </Typography>
              <Typography
                sx={{
                  variant: "body2",
                  color: "primary.main",
                  fontWeight: 600,
                }}
              >
                {filters.maxCookTime} mins
              </Typography>
            </Box>
            <Slider
              value={filters.maxCookTime}
              min={5}
              max={120}
              step={5}
              onChange={handleSliderChange("maxCookTime")}
              valueLabelDisplay="auto"
              size="small"
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
