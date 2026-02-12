export const authorizeRoles = (...allowedRoles) => {
  const normalized = new Set(allowedRoles.map((role) => String(role).toUpperCase()));

  return (req, res, next) => {
    const role = req.user?.role ? String(req.user.role).toUpperCase() : null;

    if (!role) {
      return res.status(403).json({
        success: false,
        message: "Forbidden: Role missing"
      });
    }

    if (!normalized.has(role)) {
      return res.status(403).json({
        success: false,
        message: "Forbidden: Insufficient role"
      });
    }

    next();
  };
};
